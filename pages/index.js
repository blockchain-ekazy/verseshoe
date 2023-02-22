import Landing from "./home";
// import Landing from "./whitelist-checker/index";

export default function Home({ onNotify }) {
  return (
    <div>
      <Landing onNotify={onNotify} />
    </div>
  );
}
