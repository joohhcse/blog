import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '이용약관 | DevBlog',
  description: 'DevBlog 서비스 이용약관',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/login" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          돌아가기
        </Link>
        
        <div className="bg-[#111827] rounded-xl border border-gray-800 p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">이용약관</h1>
          <p className="text-sm text-gray-500 mb-8 border-b border-gray-800 pb-6">시행일: 2026년 4월 4일</p>
          
          <div className="space-y-8 text-sm leading-relaxed text-gray-400">
            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">제1조 (목적)</h2>
              <p>
                본 약관은 DevBlog(이하 &quot;회사&quot;)가 제공하는 서비스의 이용과 관련하여 회사와 회원 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">제2조 (용어의 정의)</h2>
              <p>본 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                <li>&quot;서비스&quot;라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 &quot;회원&quot;이 이용할 수 있는 관련 서비스를 의미합니다.</li>
                <li>&quot;회원&quot;이라 함은 회사의 &quot;서비스&quot;에 접속하여 본 약관에 따라 &quot;회사&quot;와 이용계약을 체결하고 &quot;회사&quot;가 제공하는 &quot;서비스&quot;를 이용하는 고객을 말합니다.</li>
                <li>&quot;아이디(ID)&quot;라 함은 &quot;회원&quot;의 식별과 &quot;서비스&quot; 이용을 위하여 &quot;회원&quot;이 정하고 &quot;회사&quot;가 승인하는 이메일 주소를 의미합니다.</li>
                <li>&quot;비밀번호&quot;라 함은 &quot;회원&quot;이 부여 받은 &quot;아이디와 일치되는 &quot;회원&quot;임을 확인하고 비밀보호를 위해 &quot;회원&quot; 자신이 정한 문자 또는 숫자의 조합을 의미합니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">제3조 (약관의 게시와 개정)</h2>
              <ol className="list-decimal pl-5 space-y-2">
                <li>회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.</li>
                <li>회사는 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                <li>회사가 본 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행 약관과 함께 서비스의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">제4조 (회원가입)</h2>
              <p>
                이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다. 회사는 이러한 신청에 대하여 승낙함을 원칙으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">제5조 (개인정보보호 의무)</h2>
              <p>
                회사는 &quot;정보통신망법&quot; 등 관계 법령이 정하는 바에 따라 회원의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는 관련법 및 회사의 개인정보처리방침이 적용됩니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
