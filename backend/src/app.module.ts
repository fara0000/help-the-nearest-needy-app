import { Module } from "@nestjs/common";
import { UserModule } from "./business/users";
import { PostModule } from "./business/posts";

@Module({
    imports: [UserModule, PostModule]
})
export class AppModule {}