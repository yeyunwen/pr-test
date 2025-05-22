module.exports = {
  writerOpts: {
    // 只保留 scope 为 dify-sdk 的 commit
    transform: (commit) => {
      if (commit.scope === "dify-sdk") {
        return commit;
      }
      return false; // 其他 scope 不展示
    },
  },
};
