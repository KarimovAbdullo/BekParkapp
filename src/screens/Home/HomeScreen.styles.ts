import { createStyles } from 'utils/createStyles'

export default createStyles(() => ({
  main: {
    borderWidth: 1,
    backgroundColor: '#1E243F',
    flex: 1,
    paddingTop: '10@vs',
  },
  img: {
    width: 80,
    height: 80,
  },
  bar: {
    marginTop: 30,
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  card: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  head: {
    paddingHorizontal: '30@s',
    paddingTop: '15@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icon: {
    paddingRight: '10@s',
    paddingVertical: '10@vs',
  },
}))
