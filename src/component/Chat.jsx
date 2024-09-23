import React, { useEffect } from 'react';

export default function Chat() {
  useEffect(() => {
    console.log('Loading Tawk.to script');
    const script = document.createElement('script');
    script.src = 'https://embed.tawk.to/0ff53dbb3b0cd300a71c358d0e6b18f424e84365';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);

    return () => {
      console.log('Removing Tawk.to script');
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
