import React, { useState } from 'react';
import { UserFallbackIcon } from './Icons';

export function Avatar() {
  const [imageLoaded, setImageLoaded] = useState(true);

  return (
    <div className="w-[220px] h-[220px] rounded-full overflow-hidden border-2 border-border bg-surface flex items-center justify-center mx-auto shrink-0 shadow-lg">
      {imageLoaded ? (
        <img
          src="/uma.png"
          alt="Uma Maheswari V"
          className="w-full h-full object-cover"
          onError={() => setImageLoaded(false)}
        />
      ) : (
        <UserFallbackIcon />
      )}
    </div>
  );
}
