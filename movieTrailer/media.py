import webbrowser

#define a class that has the basic content for any type of video (ie: TV, Movie, youtube, home video etc...)
class Video():
    def __init__(self, video_title, video_storyline, poster_image, trailer_youtube):
        self.title = video_title
        self.storyline = video_storyline
        self.poster_image_url = poster_image
        self.trailer_youtube_url = trailer_youtube

    def show_trailer (self) :
        webbrowser.open(self.trailer_youtube_url)

#define a class that has the specific content for Movies and inherits basics of Video class
class Movie(Video):
    def __init__ (self, video_title, video_storyline, poster_image, trailer_youtube, director_name, release_date, movie_rating) :
        Video.__init__(self, video_title, video_storyline,  poster_image, trailer_youtube)
        self.director_name = director_name
        self.release_date = release_date
        self.movie_rating = movie_rating

#define a class that has the specific conten for TV shows and inherits basic of Video class -- currently not used but available for future updates
class TV(Video):
    def __init__(self, video_title, video_storyline, poster_image, trailer_youtube, broadcast_station_name, pilot_date, number_of_seasons, tv_rating) :
        Video.__init__(self, video_title, video_storyline,  poster_image, trailer_youtube)
        self.broadcast_station_name = broadcast_station_name
        self.pilot_date = pilot_date
        self.number_of_seasons = number_of_seasons
        self.tv_rating = tv_rating
    
        
       


