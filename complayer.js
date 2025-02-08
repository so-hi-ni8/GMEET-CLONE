const Player = dynamic(
    ()=> import('@/component/Player'), {
    ssr: true,
    });