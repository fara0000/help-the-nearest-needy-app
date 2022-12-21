import { DocumentBuilder } from '@nestjs/swagger';

export const SwaggerConfig = new DocumentBuilder()
  .setTitle('Help needy app Api')
  .setDescription('The API description')
  .setVersion('1.0')
  .build();

interface SwaggerDocumentOptions {
  /**
   * List of components to include in the spec
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  include?: Function[];

  /**
   * Extra type that should be scanned and added in the spec
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  extraModels?: Function[];

  /**
   * If `true`, swagger will ignore the global prefix set through `setGlobalPrefix()` method
   */
  ignoreGlobalPrefix?: boolean;

  /**
   * If `true`, swagger will also load routes from the modules imported by `include` modules
   */
  deepScanRoutes?: boolean;

  /**
   * Custom operationIdFactory that will be used to produce the `operationId`
   * based on the `controllerKey` and `methodKey`
   * @default () => controllerKey_methodKey
   */
  operationIdFactory?: (controllerKey: string, methodKey: string) => string;
}

export const SwaggerOptions: SwaggerDocumentOptions = {
  deepScanRoutes: true,
};
