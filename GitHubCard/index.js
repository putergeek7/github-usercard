/* Step 1: using axios, send a GET request to the following URL 
           (replacing the placeholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['DustinThewind505', 'Vrndavan', 'naj10000'];

// followersArray.forEach(function(item, index) {
// 	cards.appendChild(item);
// 	console.log(item, index);
// });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// {
/* <div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div> */
// }

const a = axios
	.get('https://api.github.com/users/putergeek7')
	.then(response => {
		// console.log(response.data.message);

		cards.appendChild(createCard(response.data));

		console.log(response);
	})

	.catch(error => {
		// console.log('the data was not returned' error)
	});

const b = axios
	.get('https://api.github.com/users/putergeek7/followers ')
	.then(response => {
		// console.log(response.data.message);
		response.data.forEach(item => {
			cards.appendChild(createCard(item));
		});
	})

	.catch(error => {
		// console.log('the data was not returned' error)
	});

function createCard(userInfo) {
	const card = document.createElement('div');
	const cardInfo = document.createElement('div');
	const userImg = document.createElement('img');
	const name = document.createElement('h3');
	const userName = document.createElement('p');
	const location = document.createElement('p');
	const profile = document.createElement('p');
	const followers = document.createElement('p');
	const following = document.createElement('p');
	const proBio = document.createElement('p');
	const link = document.createElement('a');

	card.appendChild(cardInfo);
	card.appendChild(userImg);
	cardInfo.appendChild(name);
	cardInfo.appendChild(userName);
	cardInfo.appendChild(location);
	cardInfo.appendChild(profile);
	cardInfo.appendChild(followers);
	cardInfo.appendChild(following);
	cardInfo.appendChild(link);

	card.classList.add('card');
	cardInfo.classList.add('card-info');
	name.classList.add('name');
	userName.classList.add('username');

	name.textContent = userInfo.login;
	userName.textContent = userInfo.login;
	userImg.src = userInfo.avatar_url;
	location.textContent = userInfo.location;
	link.href = userInfo.url;
	followers.textContent = `Followers: ${userInfo.followers}`;
	following.textContent = `Following: ${userInfo.following}`;
	proBio.textContent = userInfo.proBio;

	return card;
}

const cards = document.querySelector('.cards');
