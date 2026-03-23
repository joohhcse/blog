import AuthForm from '@/components/auth-form';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#111827] flex flex-col items-center justify-center p-4">


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
