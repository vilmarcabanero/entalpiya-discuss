import mongoose from 'mongoose';
const healthcheckSchema = new mongoose.Schema(
  {
    healthcheck: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(_doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        ret.version = ret.__v;
        delete ret.__v;
      },
    },
    timestamps: true,
  },
);

healthcheckSchema.statics.build = (attrs: HealthcheckAttrs) => {
  return new Healthcheck(attrs);
};

const Healthcheck = mongoose.model<HealthcheckDoc, HealthcheckModel>('Healthcheck', healthcheckSchema);

export { Healthcheck };

/**
 * An interface that describes the properties that are requried to create a new Healthcheck.
 */
interface HealthcheckAttrs {
  healthcheck?: string;
}

/**
 * An interface that describes the properties that a Healthcheck Model has.
 */
interface HealthcheckModel extends mongoose.Model<HealthcheckDoc> {
  build(attrs: HealthcheckAttrs): HealthcheckDoc;
}

/**
 * An interface that describes the properties that a Healthcheck Document has.
 */
interface HealthcheckDoc extends mongoose.Document {
  healthcheck: string;
}
