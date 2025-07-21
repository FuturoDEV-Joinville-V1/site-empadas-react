import './ItemFeedback.css'

function ItemFeedback({author, comment}) {
  return (
    <li className='item-feedback'>
      <article>
        <header>{author}</header>
        <p>
          {comment}
        </p>
      </article>
    </li>
  );
}

export default ItemFeedback;
