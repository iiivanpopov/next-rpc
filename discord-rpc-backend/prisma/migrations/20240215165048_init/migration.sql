-- CreateTable
CREATE TABLE "presets" (
    "id" SERIAL NOT NULL,
    "state" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "large_image_key" TEXT NOT NULL,
    "large_image_text" TEXT NOT NULL,
    "small_image_key" TEXT NOT NULL,
    "small_image_text" TEXT NOT NULL,
    "button_one_label" TEXT NOT NULL,
    "button_one_url" TEXT NOT NULL,
    "button_two_label" TEXT NOT NULL,
    "button_two_url" TEXT NOT NULL,
    "activity_type" INTEGER NOT NULL,
    "client_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "presets_pkey" PRIMARY KEY ("id")
);
