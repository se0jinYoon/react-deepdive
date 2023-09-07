import {useState, useCallback} from 'react';

// 객체랑 메소드를 매개변수로 받아옴
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
        // fetch를 더 유연하게 하기 위해 custom Hook을 사용하는 컴포넌트로부터 객체로 받아옴
      const response = await fetch(requestConfig.url, {
            method: requestConfig.method ? requestConfig.method : 'GET',
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        });

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      // 사용할 함수를 custom hook을 사용하는 컴포넌트에서 정의하여 넘겨줌
      applyData(data);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);

  // custom Hook을 부르는 component에서 활용할 custom hook 내부의 값들을 return하기
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
