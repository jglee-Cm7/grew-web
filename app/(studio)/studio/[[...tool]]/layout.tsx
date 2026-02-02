export const metadata = {
  title: "그루 Grew 관리자",
  description: "Sanity Studio - 그루 콘텐츠 관리",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
