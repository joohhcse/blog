import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: '개인정보처리방침 | DevBlog',
  description: 'DevBlog 개인정보처리방침',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/login" className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          돌아가기
        </Link>
        
        <div className="bg-[#111827] rounded-xl border border-gray-800 p-8 sm:p-12 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">개인정보처리방침</h1>
          <p className="text-sm text-gray-500 mb-8 border-b border-gray-800 pb-6">시행일: 2026년 4월 4일</p>
          
          <div className="space-y-8 text-sm leading-relaxed text-gray-400">
            <section>
              <p className="text-base text-gray-300">
                DevBlog(&apos;회사&apos;)은(는) 정보주체의 자유와 권리 보호를 위해 「개인정보 보호법」 및 관계 법령이 정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고 있습니다. 이에 「개인정보 보호법」 제30조에 따라 정보주체에게 개인정보 처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">1. 개인정보의 처리 목적</h2>
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>회원 가입 및 관리: 회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지</li>
                <li>재화 또는 서비스 제공: 서비스 제공, 콘텐츠 제공, 맞춤서비스 제공, 본인인증</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">2. 수집하는 개인정보의 항목</h2>
              <p>회사는 회원가입, 원활한 고객상담, 각종 서비스의 제공을 위해 최초 회원가입 당시 아래와 같은 최소한의 개인정보를 필수항목으로 수집하고 있습니다.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong className="text-gray-300">필수항목:</strong> 이메일 주소, 비밀번호</li>
                <li><strong className="text-gray-300">선택항목:</strong> 프로필 사진, 닉네임</li>
                <li>서비스 이용 과정이나 사업처리 과정에서 서비스 이용기록, 접속로그, 쿠키, 접속 IP 정보 등이 자동으로 생성되어 수집될 수 있습니다.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">3. 개인정보의 보유 및 이용기간</h2>
              <p>
                회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>홈페이지 회원 가입 및 관리: 홈페이지 탈퇴 시까지. 다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지
                  <ul className="list-[circle] pl-5 mt-1 space-y-1">
                    <li>관계 법령 위반에 따른 수사·조사 등이 진행 중인 경우에는 해당 수사·조사 종료 시까지</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-200 mb-3">4. 개인정보의 파기</h2>
              <p>
                회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
