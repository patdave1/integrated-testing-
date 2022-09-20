
const  { fetchData }= require("./fetchData")

describe('Testing Post', ()=>{
    it("should return 100 posts", async()=>{
        const posts = await fetchData("posts");
        expect(posts.length).toBe(100);
    });

    it("should contain post ID of 5" , async()=>{
        const posts  = await fetchData("Posts");
        expect(posts).toContainEqual({
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
          })
    })
});