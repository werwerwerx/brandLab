CREATE TABLE CollectionNodes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parentId uuid REFERENCES collectionNodes(id),
  name text NOT NULL,
  imageSrc text,
  createdAt timestamptz DEFAULT now(),
  slug text NOT NULL,
  searchTsvector tsvector GENERATED ALWAYS AS (
    to_tsvector('simple', name) || 
    to_tsvector('russian', name)
  ) STORED
);

CREATE TABLE Items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  collectionNodeId uuid REFERENCES collectionNodes(id),
  name text NOT NULL,
  description text,
  characteristics text,
  hashtags text[],
  images text[],
  price numeric(10,2),
  createdAt timestamptz DEFAULT now(),
  updatedAt timestamptz DEFAULT now(),
  searchTsvector tsvector GENERATED ALWAYS AS (
    to_tsvector('simple', name) ||
    to_tsvector('russian', name)
  ) STORED
);

CREATE TABLE ItemVariants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  itemId uuid REFERENCES items(id) ON DELETE CASCADE,
  color text NOT NULL,
  size text NOT NULL,
  quantity integer DEFAULT 0,
  srcImages text[],
  createdAt timestamptz DEFAULT now()
);

-- Индексы для поиска
CREATE INDEX idx_collections_search ON collectionNodes USING GIN(searchTsvector);
CREATE INDEX idx_items_search ON items USING GIN(searchTsvector);
CREATE INDEX idx_items_hashtags ON items USING GIN(hashtags);

-- Индексы для связей
CREATE INDEX idx_items_collection_id ON items("collectionNodeId");
CREATE INDEX idx_variants_item_id ON itemVariants("itemId");
CREATE INDEX idx_variants_color_size ON itemVariants(color, size);