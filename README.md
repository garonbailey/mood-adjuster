#Mood Adjuster 
by Garon Bailey, 2015

##User Story
Johnny's having it rough. He's a little sad and doesn't know what to do. He searches the internet for something to take his mind off of it and he finds . . . the Mood Adjuster. He clicks the button to change his mood, fills in "sad", and says he wants his mood changed. Instantly, a happy gif comes on the screen to make him think about something else.

Maybe Johnny wants to wallow in his sadness. On the form, he'll just choose to reinforce his mood, and a sad gif will come on the screen.

For whatever mood you're in, and whether you want to change it or reinforce it, the Mood Adjuster will hand deliver a gif based on the parameters you chose, and no matter what, it should bring a laugh.

##Technologies
The Mood Adjuster was built on the Rails framework along with Angular to make a single-page app. I used the [Giphy API](https://github.com/Giphy/GiphyAPI) to make a call. Before the call, I use internal logic based on the user parameters with if/else statements to customize the API request to return a gif that should loosely fit within the parameters.

##Future
It's a simple entertainment app. As such, there's not too much I can see to change going forward. With entertainment, though, it is at its best when shared with friends. So, perhaps using oAuth to automatically share a found gif to Twitter or Facebook could be a fun feature to add in the future. And as always, styling is only whatever I see in the moment and could be changed at any time. 