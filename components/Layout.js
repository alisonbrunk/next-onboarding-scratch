import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ navigation, children, footer }) {
  return (
    <div className="text-slate-800">
      <Header navigation={navigation} />
      <main>{children}</main>
      <Footer footer={footer} />
    </div>
  );
}
