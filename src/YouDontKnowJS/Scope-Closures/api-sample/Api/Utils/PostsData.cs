using System.Collections.Generic;
using Api.Models;

namespace Api.Utils
{
    public static class Generator
    {
        public static List<Post> GetPosts()
        {
            var post1 = new Post() 
            {
                Content = "Basi qkoto",
                Id = 1,
                Title = "Title 1"
            };

            var posts2 = new Post() 
            {
                Content = "Basi dobroto",
                Id = 2,
                Title = "Post 2"
            };

            var post3 = new Post() 
            {
                Content = "Basi qkoto 3",
                Id = 3,
                Title = "Post 3"
            };

            return new List<Post>() { post1, posts2, post3 }; 
        }
    }
}