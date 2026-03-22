import Link from 'next/link';
import AuthForm from '@/components/auth-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center p-4">
      <div className="absolute top-0 w-full p-6 flex justify-between items-center text-white max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <span className="text-blue-500 bg-blue-500/20 px-1 rounded inline-flex font-mono ring-1 ring-blue-500/50">{"</>"}</span> DevBlog
        </Link>
        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
          홈으로 돌아가기
        </Link>
      </div>

      <div className="w-full max-w-md bg-[#1F2937] rounded-xl shadow-xl p-8 border border-gray-800">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">환영합니다</h2>
          <p className="text-gray-400 text-sm">계정에 접속하려면 정보를 입력하세요.</p>
        </div>

        <AuthForm />
      </div>
    </div>
  );
}
