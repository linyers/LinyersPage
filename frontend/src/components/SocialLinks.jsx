import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks({ title }) {
  const url = window.location.href;
  return (
    <div className="flex justify-center gap-10 mb-10">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${title}%20${url}`}
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${title}&url=${url}&hashtags=Linyers,${title}`}
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
      </a>
    </div>
  );
}
