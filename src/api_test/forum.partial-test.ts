/**
 *
 * @remarks
 * This code is based on the project {@link https://github.com/jmfiola/jest-api-test-typescript-example}.
*/
import { Logger } from "tslog";
import ConfigHandler from "./config/configHandler";

import Posts from "./endpoints/Posts";

const config = ConfigHandler.getInstance();
const log = new Logger({
  minLevel: config.environmnetConfig.log_level,
  dateTimeTimezone:
    config.environmnetConfig.time_zone ||
    Intl.DateTimeFormat().resolvedOptions().timeZone,
});

let posts: Posts;

describe("Posts endpoint", (): void => {
  beforeAll(async (): Promise<void> => {
    posts = new Posts();
    
    log.debug("1. Posts Base url: "+posts.getBaseUrl());
  });

  it("Get popular posts", async (): Promise<void> => {
    const response = await posts.getPopularPosts();
    expect(response.status).toBe(200);
    
    expect(response.data.posts).toBeDefined();
  });
});

export default {};
