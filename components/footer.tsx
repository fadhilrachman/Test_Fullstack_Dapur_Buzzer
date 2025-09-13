"use client";
import React from "react";
import { Icon } from "@iconify/react";

const AppStoreBadge = () => (
  <a
    href="#"
    aria-label="Download on the App Store"
    className="inline-block hover:opacity-90 transition"
  >
    <img
      src="https://app.dapurbuzzer.co.id/images/icon/logo-appstore.png"
      alt="Download on the App Store"
      className="h-10 w-auto select-none"
      loading="lazy"
    />
  </a>
);

const GooglePlayBadge = () => (
  <a
    href="#"
    aria-label="Get it on Google Play"
    className="inline-block hover:opacity-90 transition"
  >
    <img
      src="https://app.dapurbuzzer.co.id/images/icon/logo-playstore.png"
      alt="Get it on Google Play"
      className="h-10 w-auto select-none"
      loading="lazy"
    />
  </a>
);

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-[440px] mx-auto px-6 py-8 text-center space-y-5">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Dapur Buzzer Indonesia
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Influencer & KOL Management Platform Indonesia
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 pt-1">
          <AppStoreBadge />
          <GooglePlayBadge />
        </div>

        <div className="flex items-center justify-center gap-5 text-gray-400 pt-1">
          <a href="#" aria-label="Instagram" className="hover:text-primary-600">
            <Icon icon="mdi:instagram" className="text-2xl" />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-primary-600">
            <Icon icon="mdi:tiktok" className="text-2xl" />
          </a>
          <a href="#" aria-label="Facebook" className="hover:text-primary-600">
            <Icon icon="mdi:facebook" className="text-2xl" />
          </a>
        </div>

        <p className="text-xs text-gray-400 pt-1">
          © 2025 Test Fullstack Fadhil Dapur Buzzer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
