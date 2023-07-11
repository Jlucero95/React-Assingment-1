import "./App.css";
import "./character-cards.css";
import "./character-ratings.css";
import "./header.css";
import "./index.css";
import "./style.css";
import "./reset.css";

function App() {
	return (
		<>
			<header>
				<h1>Fullmetal Alchemist</h1>
				<nav>
					<li>about us</li>
					<li>info</li>
					<li>support us</li>
				</nav>
			</header>
			<section id="character-ratings">
				<h4>Top Characters</h4>
				<table>
					<tr>
						<th>Name</th>
						<th>Skillset</th>
						<th>Votes</th>
					</tr>
					<tr className="dark">
						<td>Alfonse Elrich</td>
						<td>Being Loveable, Alchemy</td>
						<td>110</td>
					</tr>
					<tr className="light">
						<td>Edward Elrich "Full Metal Alchemist"</td>
						<td>Alchemy, Human Transmutation</td>
						<td>100</td>
					</tr>
					<tr className="dark">
						<td>Hawkeye</td>
						<td>Sniper, Loyal AF</td>
						<td>95</td>
					</tr>
					<tr className="light">
						<td>Mj. Armstrong</td>
						<td>Alchemy, Muscles</td>
						<td>94</td>
					</tr>
					<tr className="dark">
						<td>Nina</td>
						<td>Loving Dogs, being adorable</td>
						<td>93</td>
					</tr>
				</table>
			</section>
			<section id="character-cards">
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Alex Louis Armstrong</h3>
						{/*  nickname */}
						<h4>Major Armstrong</h4>
					</div>
					{/*  imageUrl */}
					<img
						src="https://www.giantbomb.com/a/uploads/original/One/One982One/694One67-armstrong.jpg"
						alt=""
					/>
					<p>
						{/*  description */}
						Major Armstrong may look big and strong, but deep down he's the
						biggest sap in the entire show
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Alphonse Elrich</h3>
						{/*  nickname */}
						{/*  nickname doesn't exist */}
					</div>
					{/*  imageUrl */}
					<img
						src="https://upload.wikimedia.org/wikipedia/en/7/7c/AlphonseElricArakawa.jpg"
						alt=""
					/>
					<p>
						{/*  description */}
						Alphonse is a walking suit of armor on a quest to find his real body
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Edward Elrich</h3>
						{/*  nickname */}
						<h4>The Fullmetal Alchemist</h4>
					</div>
					{/*  imageUrl */}
					<img
						src="https://www.pngkit.com/png/detail/952-9524083_edward-elric-photo-edwardelric7-full-body-edward-elric.png"
						alt=""
					/>
					<p>
						{/*  description */}
						Edward is a master alchemist and our main character... just don't
						call him short
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Greed</h3>
						{/*  nickname */}
						<h4>Greed</h4>
					</div>
					{/*  imageUrl */}
					<img
						src="https://staticOne.cbrimages.com/wordpress/wp-content/uploads/2020/08/greed-fullmetal-alchemist.jpg"
						alt=""
					/>
					<p>
						{/*  description */}
						Greed is one of the seven deadly sins Homunculii. He's the most 'on
						our side' of all of them.
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Nina Tucker</h3>
						{/*  nickname */}
						{/*  no nickname */}
					</div>
					{/*  imageUrl */}
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST9dK-tXCnVxbSeSJuCKmiX0zUbnCEVOness54DeOYgXUHSE0WB23TAUD4a3itwFbzJ9fkg&usqp=CAU"
						alt=""
					/>
					<p>
						{/*  description */}
						Nina is an adorable little girl! If you've watched FMA you know...
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Riza Hawkeye</h3>
						{/*  nickname */}
						<h4>Hawkeye</h4>
					</div>
					{/*  imageUrl */}
					<img
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8One7Oneae7d-9e3c-4aeb-b277-2a8308b0262a/d87573o-e22eb88b-Onec20-449c-9093-Onee4fba7856f3.png/vOne/fill/w_622,h_350,strp/riza_hawkeye___minimalist_vector_wallpaper_by_rebeccaangoo_d87573o-350t.png?token=eyJ0eXAiOiJKVOneQiLCJhbGciOiJIUzIOneNiJ9.eyJzdWIiOiJOnecm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6WOnet7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvODE3MWFlN2QtOWUzYy00YWViLWIyNzctMmE4MzA4YjAyNjJhXC9kODcOneNzNvLWUyMmViODhiLTFjMjAtNDQ5Yy05MDkzLTFlNGZiYTc4NTZmMy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImFOneZCI6WyJOnecm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIlOne9.InNg0JonI4tCcxkN-u8E2z7Z4aqvLLxClcDwujxbTJs"
						alt=""
					/>
					<p>
						{/*  description */}
						Hawkeye is Colonel Mustang's loyal assistant, and one of the
						strongest non-alchemist characters in the show
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Solf J. Kimblee</h3>
						{/*  nickname */}
						<h4>The Crimson Alchemist</h4>
					</div>
					{/*  imageUrl */}
					<img
						src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/03/full-metal-alchemist-mobile-char-2.jpg?resize=640%2C457&ssl=One"
						alt=""
					/>
					<p>
						{/*  description */}
						Kimblee suckkkkkssss, seriously he's not very nice
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Tim Marcoh</h3>
						{/*  nickname */}
						<h4>Dr. Marcoh</h4>
					</div>
					{/*  imageUrl */}
					<img
						src="https://m.media-amazon.com/images/M/MV5BYjljMjEzZmUtMjE2My00NWYOneLTljMzAtYWNjOTI5Yzk5NmZjXkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_FMjpg_UX1000_.jpg"
						alt=""
					/>
					<p>
						{/*  description */}
						Dr. Marcoh did some F**ked up S**t in the war on ishval, but his
						redemption arc is strong
					</p>
				</div>
				<div className="card">
					{/*  Card One */}
					<div className="card-titles">
						{/*  name */}
						<h3>Winrey Rockbell</h3>
						{/*  nickname */}
						{/*  no nickname */}
					</div>
					{/*  imageUrl */}
					<img
						src="https://s3.amazonaws.com/comicgeeks/characters/avatars/36066.jpg?t=1668454278"
						alt=""
					/>
					<p>
						{/*  description */}
						Winrey is Edward and Al's best friend, and it's a good thing because
						her specialty is making the best automail out there
					</p>
				</div>
			</section>
		</>
	);
}

export default App;
