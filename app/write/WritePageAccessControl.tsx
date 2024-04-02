import { getServerSession } from "next-auth";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { authOptions } from "../../pages/api/auth/[...nextauth]";

async function WritePageAccessControl() {
  const session = await getServerSession(authOptions);
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login"); // 로그인 페이지로 리다이렉션
    }
  });

  return <div>test</div>; // 페이지 컴포넌트를 렌더링하지 않음
}

export default WritePageAccessControl;
