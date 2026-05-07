import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { socket } from "../../services/socket.js";
import VideoPlayer from "../../components/VideoCall/VideoPlayer.jsx";
import { createPeerConnection } from "../../services/webrtc.js";

const VideoCallPage = () => {
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const peerRef = useRef(null);

  const { roomId } = useParams();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.emit("join-room", roomId);

    socket.on("user-joined", async () => {
      console.log("Another user joined");

      const offer = await peerRef.current.createOffer();

      await peerRef.current.setLocalDescription(offer);

      socket.emit("offer", {
        roomId,
        offer,
      });
    });

    socket.on("offer", async (offer) => {
      console.log("Offer received");

      await peerRef.current.setRemoteDescription(offer);

      const answer = await peerRef.current.createAnswer();

      await peerRef.current.setLocalDescription(answer);

      socket.emit("answer", {
        roomId,
        answer,
      });
    });

    socket.on("offer", async (offer) => {
      console.log("Offer received");

      await peerRef.current.setRemoteDescription(offer);

      const answer = await peerRef.current.createAnswer();

      await peerRef.current.setLocalDescription(answer);

      socket.emit("answer", {
        roomId,
        answer,
      });
    });

    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        setLocalStream(stream);

        peerRef.current = createPeerConnection();

        stream.getTracks().forEach((track) => {
          peerRef.current.addTrack(track, stream);
        });

        peerRef.current.ontrack = (event) => {
          console.log("Remote stream received");

          setRemoteStream(event.streams[0]);
        };

        peerRef.current.onicecandidate = (event) => {
          if (event.candidate) {
            socket.emit("ice-candidate", {
              roomId,
              candidate: event.candidate,
            });
          }
        };
      } catch (error) {
        console.log(error);
      }
    };

    socket.on("answer", async (answer) => {
        
      console.log("Answer received");

      await peerRef.current.setRemoteDescription(answer);
    });

    socket.on("ice-candidate", async (candidate) => {

    console.log("ICE candidate received");

    if(candidate){

        await peerRef.current.addIceCandidate(candidate);

    }

});

    startVideo();

    return () => {
      socket.off("connect");
      socket.off("user-joined");
      socket.off("offer");
      socket.off("answer");
      socket.off("ice-candidate");
    };
  }, [roomId]);
  return (
    <div>
      <h1>Video Call Page</h1>

      <VideoPlayer stream={localStream} muted={true} />

      <VideoPlayer stream={remoteStream} />
    </div>
  );
};

export default VideoCallPage;
