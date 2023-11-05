type Item = {
  item?: string;
  itemName: string;
};
export const Drawer = (props: { text: string; items: Item[] }) => {
  const items = props.items;

  return (
    <>
      <div className="drawer">
        {/* サイドバーをトグル表示するために必要なinputタグ */}
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-center items-center">
          {/* この中にはサイドバー外のコンテンツを書く */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
            {props.text}
          </label>
        </div>
        {/* サイドバー */}
        <div className="drawer-side">
          {/* サイドバー表示時のオーバーレイ（影）を勝手にあててくれる */}
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          {/* サイドバーのアイテム */}
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {items.map((item, i) => (
              <li key={i}>
                <a>{item.itemName}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
