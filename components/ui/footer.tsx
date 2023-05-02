import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emailLink, githubLink, linkedInLink } from "../data/links";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="py-4 md:py-8">
        <div className="flex items-end justify-end max-w-6xl mx-auto px-4 sm:px-6">
          {/* Bottom area */}
          <div className="space-x-4">
              <Link href={linkedInLink}>
                <FontAwesomeIcon icon={faLinkedin} className="fa-lg text-purple-400" />
              </Link>
              <Link href={githubLink}>
                <FontAwesomeIcon icon={faGithub} className="fa-lg text-purple-400" />
              </Link>
              <Link href={emailLink}>
                <FontAwesomeIcon icon={faEnvelope} className="fa-lg text-purple-400" />
              </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
