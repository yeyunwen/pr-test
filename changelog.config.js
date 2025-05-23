export default {
  writerOpts: {
    transform: (commit, context) => {
      console.log(commit);
      if (commit.type === "feat") {
        commit.type = "✨ Features | 新功能";
      } else if (commit.type === "fix") {
        commit.type = "🐛 Bug Fixes | Bug 修复";
      } else if (commit.type === "perf") {
        commit.type = "⚡ Performance Improvements | 性能优化";
      } else if (commit.type === "revert" || commit.revert) {
        commit.type = "⏪ Reverts | 回退";
      }
      return commit;
    },
  },
};
