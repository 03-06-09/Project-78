var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://img.favpng.com/18/18/12/the-boss-baby-brother-dreamworks-animation-film-png-favpng-zaRYKfpFLXkrYXpEWA020irjh.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg", "https://i.pinimg.com/474x/3f/26/89/3f26891b6ec14164ca1554d4519a120c.jpg"];
var names = ["Family Book","Mr. Amar Kumar Jain", "Dr.Anand Kumar Jain", "Saiyam Jain", "Anubhav Jain", "Mrs.Goldi Jain", "Mrs.Anita Jain"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]] ;
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
