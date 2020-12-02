import { getStaticProps } from 'pages/[id]';

describe('[id].tsx', () => {
  describe('getStaticProps', () => {
    it('should generate correct static props', async () => {
      const params = {
        test: 'test',
      };
      const result = await getStaticProps({ params });
      expect(result).toEqual({
        props: {
          ...params,
          staticPageProcessEnv: process.env.STATIC_PAGE_PROP,
        },
      });
    });
  });
});
