const instanceMapper = (instance: unknown, objectDto: unknown) => {
  Object.keys(objectDto).forEach((att) => {
    instance[att] = objectDto[att];
  });
  return instance;
};

export default instanceMapper;
