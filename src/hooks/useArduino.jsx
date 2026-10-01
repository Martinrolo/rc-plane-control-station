import { useEffect, useRef, useState } from "react";
import mqtt from "mqtt";

const CMD_TOPIC = "myproject-x7k2/cmd";
const DATA_TOPIC = "myproject-x7k2/data";

export function useArduino() {
  const clientRef = useRef(null);
  const [connected, setConnected] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const client = mqtt.connect("wss://broker.hivemq.com:8884/mqtt");
    clientRef.current = client;

    client.on("connect", () => {
      setConnected(true);
      client.subscribe(DATA_TOPIC);
    });
    client.on("close", () => setConnected(false));
    client.on("message", (_topic, payload) => {
      try { setData(JSON.parse(payload.toString())); }
      catch { setData(payload.toString()); }
    });

    return () => client.end();
  }, []);

  const send = (msg) => clientRef.current?.publish(CMD_TOPIC, msg);

  return { connected, data, send };
}