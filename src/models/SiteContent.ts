import mongoose, { Schema, Document } from 'mongoose';

export interface ISiteContent extends Document {
  pageId: string;       // e.g., 'home', 'about', 'destinations', 'footer'
  sectionId: string;    // e.g., 'hero', 'about_section', 'destination_list'
  content: any;         // Flexible JSON object for text, titles, image URLs
  updatedAt: Date;
}

const SiteContentSchema: Schema = new Schema({
  pageId: { type: String, required: true },
  sectionId: { type: String, required: true },
  content: { type: Schema.Types.Mixed, required: true },
}, { timestamps: true });

// Ensure unique page + section combo
SiteContentSchema.index({ pageId: 1, sectionId: 1 }, { unique: true });

export default mongoose.models.SiteContent || mongoose.model<ISiteContent>('SiteContent', SiteContentSchema);
