import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {

  let posts = [
    {
      id: 1,
      title: "First Fake Post",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam modi sequi quas, voluptatem impedit doloremque? Praesentium aspernatur ipsa, rerum vitae dolores nemo, eos maiores, sed quis deleniti necessitatibus dignissimos neque? Ad unde, est aliquam quisquam nobis quas facilis in explicabo magnam. Ea possimus culpa eaque facilis ex soluta amet. Enim accusantium mollitia eum quae iure ut totam consectetur odio nulla?",
      image: "https://images.squarespace-cdn.com/content/v1/5ddca8ec34c9e603a040e6c0/1589229399998-UUFIRG4GJ339BGJWBFT0/AW4A0309+%281%29.jpg",
    },
    {
      id: 2,
      title: "Second Fake Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor provident tempora, corrupti cum sapiente amet itaque nemo atque natus iste corporis doloremque at mollitia deleniti architecto maiores sequi id cumque.",
      image: "https://monikanormandphoto.com/wp-content/uploads/2021/01/What-to-Wear-to-Your-Family-Portrait-Session-1-1-1024x614.png",
    },
    {
      id: 3,
      title: "Third Fake Post",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia saepe, quidem iure maiores tempora illum sit architecto rerum quos commodi hic omnis inventore deserunt minus. Neque quam dolorem corrupti voluptatem! Aperiam iusto enim reiciendis alias velit autem, culpa quasi fuga molestiae, fugiat quibusdam hic quod consequuntur obcaecati quo, exercitationem debitis nihil at provident iure. Itaque aliquid modi at eius officia.     Tempore corporis itaque, numquam ratione reprehenderit eum quidem? Laborum ratione eius veritatis esse omnis. Error quidem autem, cumque delectus et repellendus exercitationem quaerat reiciendis atque rerum odio eligendi itaque. Accusamus?",
      image: "https://cdn.fstoppers.com/styles/full/s3/media/2021/07/27/slide35.jpeg",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
