import { OpusDecoder } from "opus-decoder";
import { OggOpusDecoder } from "ogg-opus-decoder";
import { useState } from "react";

function IndexPopup() {
  const [data, setData] = useState<string>("");

  const initDecoder = async (className: typeof OpusDecoder | typeof OggOpusDecoder) => {
    setData("");

    try {
      const decoder = new className();
      await decoder.ready;
    } catch (error) {
      setData(error.toString());
      throw error;
    }
  };

  return (
    <div
      style={{
        width: 200,
        height: 200,
        padding: 16
      }}>
      <button
        onClick={() => initDecoder(OpusDecoder)}>
        Create Opus Decoder
      </button>
      
      <button
        onClick={() => initDecoder(OggOpusDecoder)}>
        Create Ogg Opus Decoder
      </button>

      <div style={{ color: 'red' }}>{data}</div>
    </div>
  )
}

export default IndexPopup
