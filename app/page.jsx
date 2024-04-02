"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

  return null;
};

export default page;

// 4/0AeaYSHDefJK6BfQf0nYC5ZoDX9tgTXvJbGussgdNdnTvnkvVS11U0IVvyGUMSRYVpKIVMA
