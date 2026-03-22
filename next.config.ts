import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 기존 옵션들 (필요 시 추가)
  typescript: {
    // !! 주의: 타입 오류가 있어도 빌드를 강제로 진행합니다.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
