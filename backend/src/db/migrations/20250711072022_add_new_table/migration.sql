-- CreateTable
CREATE TABLE `UserSubs` (
    `followed_by_id` VARCHAR(191) NOT NULL,
    `subs_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `UserSubs_followed_by_id_subs_id_key`(`followed_by_id`, `subs_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserSubs` ADD CONSTRAINT `UserSubs_followed_by_id_fkey` FOREIGN KEY (`followed_by_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserSubs` ADD CONSTRAINT `UserSubs_subs_id_fkey` FOREIGN KEY (`subs_id`) REFERENCES `Subreddit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
