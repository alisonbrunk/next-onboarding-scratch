import { Header } from "./Header";

export function Layout({ navigation, children }) {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} />
      <main>{children}</main>
    </div>
  );
}
