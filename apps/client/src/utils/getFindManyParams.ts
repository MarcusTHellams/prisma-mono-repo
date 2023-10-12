
export const getFindManyParams = <W, O>(args: {
  where?: W;
  orderBy?: O;
  take?: number;
  skip?: number;
}) => {
  return {
    where: args.where,
    orderBy: args.orderBy,
    take: args.take,
    skip: args.skip,
  };
};

