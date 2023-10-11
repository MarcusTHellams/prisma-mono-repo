import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from 'database';

export type PostParams = {
  take?: number;
  skip?: number;
  where?: Prisma.PostWhereInput;
  orderBy?: Prisma.PostOrderByWithRelationInput;
};

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll(params?: PostParams) {
    const { take, where, orderBy, skip } = params;
    return this.prisma.post.findMany({
      take: take ? +take : undefined,
      skip: skip ? +skip : undefined,
      where: where ? JSON.parse(where as string) : undefined,
      orderBy: orderBy ? JSON.parse(orderBy as string) : undefined,
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
