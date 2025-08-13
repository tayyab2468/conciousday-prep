-- CreateTable
CREATE TABLE `Entry` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `journal` VARCHAR(191) NOT NULL,
    `intention` VARCHAR(191) NOT NULL,
    `dream` VARCHAR(191) NOT NULL,
    `priorities` VARCHAR(191) NOT NULL,
    `reflection` VARCHAR(191) NOT NULL,
    `dream_interpretation` VARCHAR(191) NOT NULL,
    `mindset_insight` VARCHAR(191) NOT NULL,
    `strategy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
