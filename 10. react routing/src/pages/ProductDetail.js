import { useParams } from 'react-router-dom';
// params object를 제공
// params 객체에는 라우트 정의에서 프로퍼티로 정의한 모든 동적 경로 파라미터가 담겨있음

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
