import SideBar from "../components/side-bar";

interface Props {
  children: React.ReactNode;
}
export default function MainLayout({ children }: Props) {
  return (
    <div>
      <SideBar />
      {children}
    </div>
  );
}
