import { Link } from 'react-router-dom';
// 이때 NavLink를 사용하지 않는 이유는 현재 하고자 하는 것은
// 제품을 클릭하면 상세페이지로 이동하면서 현재 제품 페이지를 벗어나는 것이므로
// 굳이 Navlink를 통해서 하이라이트를 주는 등의 효과를 넣을 필요가 없기 때문!

// 보통의 경우 product에 대한 정보를 백엔드에서 가져올 것이므로 http request를 하겠지만
// 일단 현재의 경우 더미 array를 두고 연습해보자!
const PRODUCTS = [
  { id: 'p1', title: 'Product 1' },
  { id: 'p2', title: 'Product 2' },
  { id: 'p3', title: 'Product 3' },
];

function ProductsPage() {
  return (
    <>
      <h1>The ProductsPage</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
