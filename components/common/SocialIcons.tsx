import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'

export default function SocialIcons() {
    return (
        <div
            className="flex gap-x-4 mt-4"
        >
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
            >
                <FaFacebookF className="w-5 h-5" />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
            >
                <FaInstagram className="w-5 h-5" />
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-accent transition-colors"
            >
                <FaYoutube className="w-5 h-5" />
            </a>
            <a
                href="mailto:kksleman50@gmail.com"
                className="text-secondary hover:text-accent transition-colors"
            >
                <FaEnvelope className="w-5 h-5" />
            </a>
        </div>
    )
}
