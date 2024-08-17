function Header() {
	return (
		<header className="px-5 py-3 flex items-center justify-between">
			<h1 className="text-3xl">bit-se-no-de</h1> {/* フォントをビット風に */}

			<nav>
				<ul className="list-none flex items-center gap-5">
					<li>
						<a href="/#">遊び方</a>
					</li>
					<li>
						<a href="/#">他の作品</a>
					</li>
					<li>
						<a href="/#">開発者情報</a>
					</li>
				</ul>
			</nav>
		</header>
	)
};

export default Header;
